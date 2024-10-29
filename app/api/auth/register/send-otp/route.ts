import { connectDB } from '@/lib/db';
import User from '@/models/User';
import Otp from '@/models/Otp';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

import {
  generateOtp,
  handleDbOtp,
  phoneValidate,
  sendMail,
  sendSMS
} from '@/lib/functions';

export async function POST(request: Request) {
  try {
    await connectDB();
    const { id } = await request.json();
    if (id.includes('@')) {
      const user = await User.findOne({ email: id }).select('email');
      if (user) {
        return NextResponse.json(
          { message: 'User Already Exists' },
          { status: 404 }
        );
      }
      const otp = generateOtp();
      await sendMail(
        id,
        'OTP for Registration',
        `Your OTP is: ${otp}`,
        'Insur Hotels'
      );
      await Otp.create({ id, otp });
      return NextResponse.json({ message: 'OTP sent successfully' });
    } else if (phoneValidate(id)) {
      const phone = phoneValidate(id);
      if (phone) {
        try {
          const user = await User.findOne({ phone: phone });
          if (user) {
            return NextResponse.json(
              { message: 'User Already Exists' },
              { status: 404 }
            );
          }
          const otp = await handleDbOtp(phone);
          if (otp) {
            await sendSMS(phone, otp);
            return NextResponse.json({ message: 'OTP sent successfully' });
          }
        } catch (error: any) {
          return NextResponse.json(
            { message: error.message || 'An error occurred' },
            { status: 400 }
          );
        }
      }
    } else {
      return NextResponse.json(
        { message: 'Invalid email/phone' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}

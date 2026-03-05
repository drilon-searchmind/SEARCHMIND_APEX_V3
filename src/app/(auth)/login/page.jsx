"use client"

import React from 'react'
import Heading1 from '@/components/headings/Heading1'
import Heading3 from '@/components/headings/Heading3'
import AbstractBackground1 from '@/components/layouts/backgrounds/AbstractBackground1'
import ParagraphDefault from '@/components/headings/ParagraphDefault'
import DefaultCard from '@/components/layouts/DefaultCard'
import RoundedNumber from '@/components/misc/RoundedNumber'
import Heading2 from '@/components/headings/Heading2'
import Button from '@/components/form/Button'
import Input from '@/components/form/Input'

const LoginPage = () => {
    return (
        <section id='LoginPage'>
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-20 relative">
                <span className='col-span-11'>
                    <AbstractBackground1 backgroundUrl='/abstracts/16359095_v904-nunny-012.jpg'>
                        <span id='whiteSpan1' className='bg-zinc-50'></span>
                        <span id='whiteSpan2' className='bg-zinc-50'></span>
                        <span id='whiteSpan3' className='bg-zinc-50'></span>
                        <span id='whiteSpan4' className='bg-zinc-50'></span>

                        <section className='flex flex-col gap-10 px-20'>
                            <div className='h-full flex flex-col gap-0'>
                                <Heading1 className="text-white mb-4">Get Started<br /> on Apex</Heading1>
                                <ParagraphDefault>Please log in to your account to continue.</ParagraphDefault>
                            </div>
                            <div className='flex gap-4 mt-10'>
                                <DefaultCard>
                                    <RoundedNumber>1</RoundedNumber>
                                    <Heading3>Hello</Heading3>
                                    <ParagraphDefault textColor="black" textSize='base'>Please log in to your account to continue.</ParagraphDefault>
                                </DefaultCard>

                                <DefaultCard cardType="beige">
                                    <RoundedNumber>2</RoundedNumber>
                                    <Heading3>Hello 2</Heading3>
                                    <ParagraphDefault textColor="black" textSize='base'>Please log in to your account to continue.</ParagraphDefault>
                                </DefaultCard>

                                <DefaultCard cardType="beige">
                                    <RoundedNumber>3</RoundedNumber>
                                    <Heading3>Hello 3</Heading3>
                                    <ParagraphDefault textColor="black" textSize='base'>Please log in to your account to continue.</ParagraphDefault>
                                </DefaultCard>
                            </div>
                        </section>
                    </AbstractBackground1>
                </span>

                <div className="flex bg-zinc-50 items-center justify-center px-40 col-span-9">
                    <div className='w-full'>
                        <Heading2 className="text-center mb-4">Login Here</Heading2>
                        <ParagraphDefault textPosition="center" textColor="black" textSize='base'>Please enter your credentials to login.</ParagraphDefault>

                        <span className='flex items-center justify-center mt-10'>
                            <Button variant="white">
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                <span>Sign in with Google</span>
                            </Button>
                        </span>

                        <div className="relative my-10">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-zinc-50 text-zinc-500">Or continue with</span>
                            </div>
                        </div>

                        <form className='mt-8 flex flex-col gap-2'>
                            <Input label="Email" type="email" placeholder="Enter your email" />
                            <Input label="Password" type="password" placeholder="Enter your password" />
                            <span className='mt-5'>
                                <Button widthSize="full" type="submit">Submit</Button>
                            </span>

                            <ParagraphDefault textPosition="center" textColor="black" textSize='sm' marginTop="mt-4">Having issues logging in? <a href="#" className='text-[var(--brand-primary)] hover:underline'>Contact us</a></ParagraphDefault>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage
"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const sendEmail = (params) => {
        const toastId = toast.loading('Sending email...');

        emailjs
            .send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, params,
                {
                    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                    limitRate: {
                        throttle: 5000,
                    }
                })
            .then(
                () => {
                    toast.success('Email sent successfully!', {
                        id: toastId,
                    });
                },
                (error) => {
                    toast.error('Error sending email. Please try again later.', {
                        id: toastId,
                    });
                },
            );
    };

    const onSubmit = (data) => {
        const templateParams = {
            from_name: data.name,
            to_name: 'Duane',
            message: data.message,
            reply_to: data.email,
        }

        sendEmail(templateParams);
    }
    console.log(errors);

    return (
        <>
            <Toaster richColors position="top-center" />
            <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center justify-center space-y-4 pt-8">

                <input type="text" placeholder="Name" {...register("name", {
                    required: 'This field is required.',

                    minLength: {
                        value: 3,
                        message: 'Name must be at least 3 characters long.'
                    }
                })}
                    className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
                />
                {errors.name && <span className='text-red-500 text-sm'>{errors.name.message}</span>}

                <input type="email" placeholder="Email" {...register("email", { required: 'This field is required.' })}
                    className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
                />
                {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}

                <textarea placeholder="message" {...register("message", {
                    required: 'This field is required.', maxLength: {
                        value: 500,
                        message: 'Message must be less than 500 characters long.'
                    }
                })}
                    className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
                />
                {errors.message && <span className='text-red-500 text-sm'>{errors.message.message}</span>}

                <input className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-accent/50 cursor-pointer capitalize' type="submit" />
            </form>
        </>
    );
}
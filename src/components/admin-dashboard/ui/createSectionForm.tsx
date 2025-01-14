"use client";

import Form from '@/components/core-components/forms';
import Button from '@/components/core-components/buttons';
import Textarea from '@/components/core-components/text-area';
import Typography from '@/components/core-components/typography';
import InputField from '@/components/core-components/input-feilds';

const CreateSectionForm = () => {
    return (
        <Form
            // action={async () => {
            //     "use server"
            //     console.log("something")
            // }}
            className='flex flex-col gap-3'
        >
            <InputField required className='px-4 py-2 rounded-lg bg-white outline-1 shadow-md' type="text" name="name" id="name" placeholder='name' />
            <InputField required className='px-4 py-2 rounded-lg bg-white outline-1 shadow-md' type="text" name="description" id="description" placeholder='description' />

            <Typography variant='h3' className='text-xl text-gray-500'>Content</Typography>

            <label htmlFor="layout">
                <Typography>Layout</Typography>

                <select id='layout' name='layout'>
                    <option value="1/1">full</option>
                    <option value="1/2">one half</option>
                    <option value="1/3">one third</option>
                    <option value="2/3">tow third</option>
                </select>
            </label>

            <Textarea />

            <InputField className='flex gap-3 p-3' type="checkbox" name="isActive" id="isActive" label='is Active' />

            <Button type="submit" className='px-4 py-2 rounded-lg bg-black text-white shadow-md'>Submit</Button>
        </Form>
    )
}

export default CreateSectionForm
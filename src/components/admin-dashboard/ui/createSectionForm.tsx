"use client";

import Form from '@/components/core-components/forms';
import Button from '@/components/core-components/buttons';
import Textarea from '@/components/core-components/text-area';
import Typography from '@/components/core-components/typography';
import InputField from '@/components/core-components/input-feilds';
import { useDispatch } from 'react-redux';
import { setDescription, setEditorContent, setIsActive, setLayout, setName } from '@/store/slices/data';
import { SectionSizes, Tables } from '@/utils/types';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { create } from '@/actions/portfolio/actions';

const CreateSectionForm = () => {
    const data = useSelector((state: RootState) => state.dataSlice);

    const dispatch = useDispatch();

    const targetTable = Tables.sections;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("data: ", data);
        console.log("data submitted..");
        // TODO: submit data
        // const formData = new FormData(e.currentTarget);
        await create(targetTable, data)
    }

    return (
        <Form
            onSubmit={handleSubmit}
            className='flex flex-col gap-3'
        >
            <InputField
                required
                className='px-4 py-2 rounded-lg bg-white outline-1 shadow-md'
                type="text" name="name" id="name" placeholder='name'
                onChange={(e) => dispatch(setName(e.target.value))}
            />
            <InputField
                required
                className='px-4 py-2 rounded-lg bg-white outline-1 shadow-md'
                type="text" name="description" id="description" placeholder='description'
                onChange={(e) => dispatch(setDescription(e.target.value))}
            />

            <Typography variant='h3' className='text-xl text-gray-500'>Content</Typography>

            <label htmlFor="layout">
                <Typography>Layout</Typography>

                <select id='layout' name='layout' onChange={(e) => dispatch(setLayout(e.target.value as SectionSizes))}>
                    <option value={SectionSizes.full}>full</option>
                    <option value={SectionSizes.oneHalf}>one half</option>
                    <option value={SectionSizes.oneThird}>one third</option>
                    <option value={SectionSizes.twoThirds}>tow third</option>
                    <option value={SectionSizes.oneFourth}>one fourth</option>
                    <option value={SectionSizes.twoFourth}>tow fourth</option>
                    <option value={SectionSizes.threeFourth}>threeFourth</option>
                </select>
            </label>

            <Textarea onEditorChange={(content) => dispatch(setEditorContent(content))} />

            <InputField
                className='flex gap-3 p-3'
                type="checkbox" name="isActive" id="isActive" label='is Active'
                onChange={(e) => {
                    if (e.target instanceof HTMLInputElement) {
                        dispatch(setIsActive(e.target.checked));
                    }
                }}
                defaultChecked
            />

            <Button type="submit" className='px-4 py-2 rounded-lg bg-black text-white shadow-md'>Submit</Button>
        </Form>
    )
}

export default CreateSectionForm


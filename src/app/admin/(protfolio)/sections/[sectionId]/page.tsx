import { getSingle, update } from '@/actions/portfolio/actions';

// components
import Link from 'next/link';
import Form from '@/components/core-components/forms';
import Button from '@/components/core-components/buttons';
import Section from '@/components/core-components/section';
import Container from '@/components/core-components/container';
import Typography from '@/components/core-components/typography';
import InputField from '@/components/core-components/input-feilds';

// icons
import { FaArrowLeft } from 'react-icons/fa';
import { SectionSizes, Tables } from '@/utils/types';
import Textarea from '@/components/core-components/text-area';
import { FeatureFlagService } from '@/services/featureFlags';

/**
 * This feature is not available yet 
 */
const EditSection = async ({ params }: { params: Promise<{ sectionId: string }> }) => {
    const featureFlags = await FeatureFlagService.getInstance();
    const isUserPageEnabled = featureFlags.isEnabled("userPage")

    if (!isUserPageEnabled) {
        return (
            <div>
                <h1>This feature is not available yet</h1>
                <Link href={"/admin/sections"}>back to sections</Link>
            </div>
        )
    }

    const { sectionId } = await params;
    const targetTable = Tables.sections;
    // TODO: Add type and validation
    const data = await getSingle(targetTable, sectionId);
    console.log(data);

    const handleUpdate = async (data: FormData) => {
        "use server";

        await update(targetTable, sectionId, data);
        // await redirect("admin/sections")
    }

    return (
        <Container variant='main' className='container p-5 flex flex-col gap-20'>
            <Container variant='section' className='flex flex-col gap-5 p-10'>
                <Section className='flex items-center justify-start gap-4 '>
                    <Link href={"/admin/sections"} className='text-3xl'>
                        <FaArrowLeft />
                    </Link>

                    <Typography variant='h1' className='text-4xl font-bold'>Edit Section</Typography>
                </Section>

                <Typography className='text-2xl'>Here you can edit the created section</Typography>
            </Container>

            <Container variant='section'>
                <Typography variant='h2' className='text-2xl mb-3'>Update the {data.name} section</Typography>

                <Form
                    // onSubmit={handleSubmit}
                    action={handleUpdate}
                    className='flex flex-col gap-3'
                >
                    <InputField
                        required
                        className='px-4 py-2 rounded-lg bg-white outline-1 shadow-md'
                        type="text" name="name" id="name" placeholder='name'
                        defaultValue={data.name}
                    // onChange={(e) => dispatch(setName(e.target.value))}
                    />
                    <InputField
                        required
                        className='px-4 py-2 rounded-lg bg-white outline-1 shadow-md'
                        type="text" name="description" id="description" placeholder='description'
                        defaultValue={data.description}
                    // onChange={(e) => dispatch(setDescription(e.target.value))}
                    />

                    <Typography variant='h3' className='text-xl text-gray-500'>Content</Typography>

                    <label htmlFor="layout">
                        <Typography>Layout</Typography>

                        <select id='layout' name='layout'
                            // onChange={(e) => dispatch(setLayout(e.target.value as SectionSizes))}
                            defaultValue={data.layout}
                        >
                            <option value={SectionSizes.full}>full</option>
                            <option value={SectionSizes.oneHalf}>one half</option>
                            <option value={SectionSizes.oneThird}>one third</option>
                            <option value={SectionSizes.twoThirds}>tow third</option>
                            <option value={SectionSizes.oneFourth}>one fourth</option>
                            <option value={SectionSizes.twoFourth}>tow fourth</option>
                            <option value={SectionSizes.threeFourth}>threeFourth</option>
                        </select>
                    </label>

                    <Textarea
                    // onEditorChange={
                    //     // (content) => dispatch(setEditorContent(content))
                    //     (content) => console.log(content)
                    // }
                    // defaultValue={}
                    />

                    <InputField
                        className='flex gap-3 p-3'
                        type="checkbox" name="isActive" id="isActive" label='is Active'
                        // onChange={(e) => {
                        //     if (e.target instanceof HTMLInputElement) {
                        //         dispatch(setIsActive(e.target.checked));
                        //     }
                        // }}
                        defaultChecked={data.isActive}
                    />

                    <Button type="submit" className='px-4 py-2 rounded-lg bg-black text-white shadow-md'>Submit</Button>
                </Form>
            </Container>
        </Container>
    )
}

export default EditSection
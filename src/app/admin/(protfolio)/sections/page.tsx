
// components
import Button from '@/components/core-components/buttons';
import Section from '@/components/core-components/section';
import Container from '@/components/core-components/container';
import Typography from '@/components/core-components/typography';

// icons
import { MdEdit } from 'react-icons/md';
import CreateSectionForm from '@/components/admin-dashboard/ui/createSectionForm';
import { getAll } from '@/actions/portfolio/actions';
import { Tables } from '@/utils/types';
import Link from 'next/link';
import OpenModalBtn from '@/components/modal/open-modal-btn';

const SectionsControlCenter = async () => {
    const createdSections = await getAll(Tables.sections);

    return (
        <Container variant='main' className='container p-5 flex flex-col gap-20'>
            <Container variant='section' className='flex flex-col gap-5 p-10'>
                <Typography variant='h1' className='text-4xl font-bold'>Sections Control Center</Typography>

                <Typography variant='p' className='text-2xl'>Here you can manage Sections</Typography>
            </Container>

            <Container variant='section'>
                <Section className='flex justify-between items-center'>
                    <Typography variant='h2' className='text-2xl mb-3'>Created Sections</Typography>

                    <Button className='text-3xl'>
                        <MdEdit />
                    </Button>
                    {/* //! this line for testing debugging purposes */}
                    {/* <OpenModalBtn window='success'>
                        open modal
                    </OpenModalBtn> */}
                </Section>

                <ul className='flex gap-3'>
                    {createdSections.map((section, idx) => (
                        <li key={idx} className='flex'>
                            <Link href={`/admin/sections/${section.id}`} className='p-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 shadow outline-2'>{section.name}</Link>
                        </li>
                    ))}
                </ul>
            </Container>

            <Container variant='section'>
                <Typography variant='h2' className='text-2xl mb-3'>Add New Section</Typography>

                <CreateSectionForm />
            </Container>
        </Container>
    )
}

export default SectionsControlCenter
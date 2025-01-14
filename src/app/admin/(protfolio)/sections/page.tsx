
// components
import Form from '@/components/core-components/forms';
import Button from '@/components/core-components/buttons';
import Section from '@/components/core-components/section';
import Container from '@/components/core-components/container';
import Typography from '@/components/core-components/typography';
import InputField from '@/components/core-components/input-feilds';

// icons
import { MdEdit } from 'react-icons/md';
import CreateSectionForm from '@/components/admin-dashboard/ui/createSectionForm';

const SectionsControlCenter = () => {
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
                </Section>

                {/* <ul className='flex gap-3'>
                    {headerLinks.map((link, idx) => (
                        <li key={idx} className='flex'>
                            <Link href={`/admin/header/${link.id}`} className='p-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 shadow outline-2'>{link.name}</Link>
                        </li>
                    ))}
                </ul> */}
            </Container>

            <Container variant='section'>
                <Typography variant='h2' className='text-2xl mb-3'>Add New Section</Typography>

                <CreateSectionForm />
            </Container>
        </Container>
    )
}

export default SectionsControlCenter
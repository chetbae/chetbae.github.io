import { SideNav } from '../components/SideNav';
import { typography, containers } from '../styles';

export const ProjectsPage = () => {

    return(
        <containers.PageContainer>
            <containers.ContentContainer>
                <typography.LargeHeading1>
                    Projects 💻 ;
                </typography.LargeHeading1>
            </containers.ContentContainer>
            <SideNav />
        </containers.PageContainer>
    );
};
import { SideNav } from '../components/SideNav';
import { typography, containers } from '../styles';

export const MusicPage = () => {

    return(
        <containers.PageContainer>
            <containers.ContentContainer>
                <typography.LargeHeading1>
                    music 🎺 ;
                </typography.LargeHeading1>
            </containers.ContentContainer>
            <SideNav />
        </containers.PageContainer>
    );
};
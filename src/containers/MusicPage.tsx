import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { typography, containers } from '../styles';
import { SideNav } from '../components/SideNav';

export const MusicPage = () => {
    const themeContext = useContext(ThemeContext);
    const isDark = themeContext.id === 'dark';
    
    return(
            <containers.SiteContainer>
                <containers.PageContainer>
                <containers.ContentContainer>
                    <typography.LargeHeading1>
                        music 🎺 ;
                    </typography.LargeHeading1>
                </containers.ContentContainer>
                <SideNav />
            </containers.PageContainer>
            </containers.SiteContainer>
    );
};
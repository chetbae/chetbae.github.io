import styled, { ThemeProvider } from 'styled-components';
import { typography, containers, light_mode, dark_mode } from '../styles';
import { ThemeManager } from '../functions/themeManager';
import { SideNav } from '../components/SideNav';
import { Toggle } from '../components/Toggle';

export const ProjectsPage = () => {
    const themeProp = ThemeManager();
    const isDark = themeProp.theme;
    const themeMode = themeProp.theme ? dark_mode : light_mode; 
    
    return(
        <ThemeProvider theme={themeMode}>
            <containers.SiteContainer>
                <containers.PageContainer>
                <containers.ContentContainer>
                    <typography.LargeHeading1>
                        Projects 💻;
                    </typography.LargeHeading1>
                </containers.ContentContainer>
                <SideNav />
                <Toggle {...themeProp} />
            </containers.PageContainer>
            </containers.SiteContainer>
        </ThemeProvider>
    );
};
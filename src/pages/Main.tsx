import Layout from 'components/common/Layout';

interface IMainProps {
    children: React.ReactNode;
}

function Main({ children }: IMainProps) {
    return <Layout>{children}</Layout>;
}

export default Main;

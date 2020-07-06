import dynamic from 'next/dynamic'
const NoSSRPage = dynamic(
  import('../components/Home'), {
    loading: () => (<div></div>),
    ssr: false,
  },
);

export default NoSSRPage;
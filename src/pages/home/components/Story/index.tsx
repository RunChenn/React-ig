import Item from "./Item";
// import { useGetIGStoiesQuery } from 'services/homeServices';
// import Loading from 'components/Loading';

const Story: React.FC = () => {
  // const { data, isLoading } = useGetIGStoiesQuery('all');

  const data = [
    {
      id: 1,
      name: "bruce_fe",
      avatar: "/images/avatars/a1.png",
    },
    {
      id: 2,
      name: "max",
      avatar: "/images/avatars/a2.png",
    },
    {
      id: 3,
      name: "fm",
      avatar: "/images/avatars/a3.png",
    },
    {
      id: 4,
      name: "joanne",
      avatar: "/images/avatars/a4.png",
    },
    {
      id: 5,
      name: "focus",
      avatar: "/images/avatars/a5.png",
    },
    {
      id: 6,
      name: "louis",
      avatar: "/images/avatars/a6.png",
    },
    {
      id: 7,
      name: "alvin",
      avatar: "/images/avatars/a7.png",
    },
    {
      id: 8,
      name: "grace",
      avatar: "/images/avatars/a8.png",
    },
    {
      id: 9,
      name: "rance",
      avatar: "/images/avatars/a9.png",
    },
    {
      id: 10,
      name: "bruce_fe",
      avatar: "/images/avatars/a10.png",
    },
  ];

  return (
    <div className="w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8">
      {data.map((item) => {
        const { id, name, avatar } = item;
        return <Item key={id} name={name} avatar={avatar} />;
      })}

      {/* {isLoading && (
        <div className="flex justify-center w-full">
          <Loading />
        </div>
      )}

      // 資料有可能是空的，加？可以做判斷，如果是空的map就不會被執行
      {!isLoading &&
        data?.map((item) => {
          const { id, name, avatar } = item;
          return <Item key={id} name={name} avatar={avatar} />;
        })} */}
    </div>
  );
};

export default Story;

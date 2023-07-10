import LoadingCardStack from "@/components/LoadingCardStack";
import Heading from "@/components/Heading";

const Loading = () => {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div>
      <Heading
        title="All Clothing"
        subtitle={`Discover Sweaty Betty's range of beautiful, technical bum-sculpting leggings, yoga pants, jumpers sports bras
          a more. shop sweaty Betty now`}
      />
      <LoadingCardStack />
    </div>
  );
};

export default Loading;

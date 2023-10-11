import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import MenuWrap from "@/components/atoms/MenuWrap";
import PageRow from "@/components/atoms/PageRow";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import PageBanner from "@/components/organisms/PageBanner";

const Beranda = () => {
  return (
    <>
      <PageTransition>  
        <PageRow>
          <ContainerQuery>
            <PageBanner></PageBanner>
            <MenuWrap>
              <CardIconShadow
                title="Bifold Wallet"
                subtitle="Dompet kulit dengan model lipat dua"
                link="/bifold"
                icon="/images/icon/wallet.svg"
              ></CardIconShadow>
              <CardIconShadow
                title="Card Wallet"
                subtitle="Sangat cocok untuk gen z yang ga mau ribet"
                link="/cuti"
                icon="/images/icon/money.svg"
              ></CardIconShadow>
            </MenuWrap>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Beranda;

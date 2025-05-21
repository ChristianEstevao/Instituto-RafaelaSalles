
import { useTranslations } from 'next-intl';
import MasterLayout from "@/masterLayout/MasterLayout";
import Link from 'next/link';
import DashBoardLayerOne from "@/components/DashBoardLayerOne";

export default function Home() {
  const t = useTranslations('app');
  
  return (
    <MasterLayout>
      <DashBoardLayerOne />
    </MasterLayout>
  );
}

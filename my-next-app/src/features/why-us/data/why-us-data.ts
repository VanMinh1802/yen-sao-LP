export type BentoCardVariant = 'default' | 'large' | 'stats';

export interface BentoCardData {
  id: string;
  icon: string | null;
  title: string;
  description: string;
  variant: BentoCardVariant;
  backgroundImage: string | null;
  counterTarget: number | null;
}

export const whyUsData: BentoCardData[] = [
  {
    id: "card-1-large",
    icon: "🏠",
    title: "Nhà Yến Riêng",
    description: "Sở hữu hệ thống nhà yến đô thị sinh thái tại Nha Trang. Chủ động tuyệt đối nguồn cung và cam kết chất lượng từng tổ yến.",
    variant: "large",
    backgroundImage: "/images/timeline/2010.webp", // Using timeline 2010 image (Nhà Yến)
    counterTarget: null,
  },
  {
    id: "card-2",
    icon: "🌿",
    title: "100% Tự Nhiên",
    description: "Thu hoạch thủ công, hoàn toàn không hóa chất bảo quản, an toàn tuyệt đối cho sức khỏe người dùng, kể cả mẹ bầu.",
    variant: "default",
    backgroundImage: null,
    counterTarget: null,
  },
  {
    id: "card-3",
    icon: "👁️",
    title: "Tham Quan Trực Tiếp",
    description: "Khách hàng được quyền xem trực tiếp không gian nhà yến và xưởng sơ chế, tận mắt chứng kiến quy trình an toàn.",
    variant: "default",
    backgroundImage: null,
    counterTarget: null,
  },
  {
    id: "card-4",
    icon: "⭐",
    title: "20+ Năm Uy Tín",
    description: "Từ năm 2006, chúng tôi vinh dự phục vụ hàng chục vạn khách hàng trên toàn quốc với triết lý minh bạch.",
    variant: "default",
    backgroundImage: null,
    counterTarget: null,
  },
  {
    id: "card-5-stats",
    icon: null,
    title: "10,000",
    description: "Khách hàng thân thiết tin dùng",
    variant: "stats",
    backgroundImage: null,
    counterTarget: 10000,
  }
];

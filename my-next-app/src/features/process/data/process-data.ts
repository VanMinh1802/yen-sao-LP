export interface ProcessStepData {
  number: number;
  icon: string;
  title: string;
  description: string;
}

export const processData: ProcessStepData[] = [
  {
    number: 1,
    icon: "🏠",
    title: "Khai Thác",
    description: "Yến chim tự bay về nhà làm tổ tự nhiên tại vùng biển Nha Trang.",
  },
  {
    number: 2,
    icon: "✋",
    title: "Thu Hoạch",
    description: "Khai thác thủ công, nhẹ nhàng chọn lọc từng tổ yến nguyên chất.",
  },
  {
    number: 3,
    icon: "🧹",
    title: "Làm Sạch",
    description: "Thợ lành nghề tỉ mỉ gắp nhặt sạch màng và lông yến từng sợi.",
  },
  {
    number: 4,
    icon: "📦",
    title: "Đóng Gói",
    description: "Đóng hộp tiệt trùng cao cấp sang trọng đạt chuẩn xuất khẩu.",
  },
  {
    number: 5,
    icon: "🤝",
    title: "Giao Hàng",
    description: "Giao tận nơi uy tín nhanh chóng, bảo hiểm an toàn trên toàn quốc.",
  }
];

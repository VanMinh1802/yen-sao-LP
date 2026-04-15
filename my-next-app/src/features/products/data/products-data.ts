import { Product } from "../types/product.types";

export const productsData: Product[] = [
  {
    id: "prod-1",
    name: "Yến Thô Nguyên Tổ",
    description: "Tổ yến nguyên chất 100%, chưa qua xử lý làm sạch, giữ trọn vẹn dưỡng chất tự nhiên và nguyên bản nhất.",
    category: "raw",
    badge: "Bán Chạy",
    imageSrc: "/images/products/yen-tho-nguyen-to.jpeg",
    imageAlt: "Yến Thô Nguyên Tổ",
    price: "Liên hệ giá",
    details: [
      { icon: "✨", title: "Nguồn gốc", description: "100% Yến sào thiên nhiên Nha Trang" },
      { icon: "⚖️", title: "Trọng lượng", description: "Hộp 50g / 100g" },
      { icon: "🛡️", title: "Bảo quản", description: "Môi trường thoáng mát, tránh ẩm ướt tuyệt đối" }
    ]
  },
  {
    id: "prod-2",
    name: "Hộp Quà Cao Cấp",
    description: "Bộ quà tặng yến sào tinh tế, sang trọng, thiết kế cao cấp dành riêng cho những dịp trọng đại tri ân đối tác.",
    category: "gift",
    badge: "Quà Tặng",
    imageSrc: "/images/products/hop-qua-cao-cap.jpeg",
    imageAlt: "Hộp Quà Cao Cấp",
    price: "Liên hệ giá",
    details: [
      { icon: "🎁", title: "Thành phần", description: "Yến tinh chế thượng hạng kèm đồ chưng" },
      { icon: "🎀", title: "Đóng gói", description: "Hộp gỗ mộc mạc đẳng cấp kèm túi xách" },
      { icon: "💫", title: "Phù hợp", description: "Biếu tặng khách VIP, đối tác, gia đình" }
    ]
  },
  {
    id: "prod-3",
    name: "Yến Sợi Cao Cấp",
    description: "Yến sào dạng sợi dài nguyên chất, tinh chế thủ công tỉ mỉ, giúp bữa yến thêm thơm ngon và dai dãn.",
    category: "refined",
    badge: null,
    imageSrc: "/images/products/yen-soi-cao-cap.jpeg",
    imageAlt: "Yến Sợi Cao Cấp",
    price: "Liên hệ giá",
    details: [
      { icon: "✨", title: "Hình dáng", description: "Cấu trúc sợi nổi bật tinh túy" },
      { icon: "👨‍🍳", title: "Chế biến", description: "Rút lông làm sạch khéo léo hoàn toàn từ thợ lành nghề" },
      { icon: "⏱️", title: "Ngâm nở", description: "Tối ưu hóa thời gian ngâm chuẩn dưới 45 phút" }
    ]
  },
  {
    id: "prod-4",
    name: "Yến Tinh Chế",
    description: "Sản phẩm được làm sạch 100% tạp chất, đắp khuôn tổ định hình lại trọn vẹn, người dùng tiện lợi chưng cất ngay.",
    category: "refined",
    badge: null,
    imageSrc: "/images/products/yen-tinh-che.jpg",
    imageAlt: "Yến Tinh Chế",
    price: "Liên hệ giá",
    details: [
      { icon: "⚡", title: "Đặc điểm", description: "Làm sạch kỹ lưỡng vô trùng tiện dụng" },
      { icon: "⚖️", title: "Trọng lượng", description: "Quy cách đa dạng hộp từ 50g đến 100g" },
      { icon: "🥣", title: "Sử dụng", description: "Chỉ cần ngâm nở nhẹ và chưng cất trực tiếp không tốn công vặt lông" }
    ]
  },
  {
    id: "prod-5",
    name: "Set Quà Đặc Biệt",
    description: "Bộ sản phẩm mang đậm phong thái Á Đông phú quý, chứa đựng thông điệp sắc xuân đong đầy tài lộc hoan hỷ thiết kế riêng.",
    category: "gift",
    badge: "Đặc Biệt",
    imageSrc: "/images/products/set-qua-dac-biet.jpeg",
    imageAlt: "Set Quà Đặc Biệt",
    price: "Liên hệ giá",
    details: [
      { icon: "🎁", title: "Giao hoà", description: "Sang trọng và ý nghĩa" },
      { icon: "❤️", title: "Giá trị", description: "Thay nghìn lời chúc vạn sự trân quý" },
      { icon: "✔️", title: "Độc quyền", description: "Mẫu mã thiết kế độc bản" }
    ]
  },
  {
    id: "prod-6",
    name: "Yến Thô Đảo",
    description: "Yến quý thu hoạch cực khổ trực tiếp từ các vách đá cheo leo hang động tại đảo biển, có tổ chức hình thành chắc chắn vững chãi.",
    category: "raw",
    badge: null,
    imageSrc: "/images/products/yen-tho-dao.jpg",
    imageAlt: "Yến Thô Đảo",
    price: "Liên hệ giá",
    details: [
      { icon: "🌊", title: "Khai thác", description: "Tự nhiên hoang dã tại vùng ven khơi hải đảo xa xôi" },
      { icon: "💎", title: "Dưỡng chất", description: "Chứa vô số vi chất quý báu do điều kiện tự nhiên khắc nghiệt" },
      { icon: "🔒", title: "Tin cậy", description: "Giấy tờ pháp lý minh bạch toàn phần" }
    ]
  }
];

import { Product } from "../types/product.types";

export const productsData: Product[] = [
  {
    id: "prod-1",
    name: "Yến Thô Nguyên Tổ",
    description: "Tổ yến nguyên chất 100%, chưa qua xử lý làm sạch, giữ trọn vẹn dưỡng chất tự nhiên và nguyên bản nhất.",
    category: "raw",
    badge: "Bán Chạy",
    imageSrc: "/images/products/img-9367.webp",
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
    imageSrc: "/images/products/hop-qua-cao-cap.webp",
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
    imageSrc: "/images/products/img-7372.webp",
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
    imageSrc: "/images/products/yen-tinh-che.webp",
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
    name: "Yến Chưng Sẵn",
    description: "Yến sào đã chưng cất sẵn, tiện lợi sử dụng ngay, phù hợp người bận rộn muốn bổ sung dưỡng chất mỗi ngày.",
    category: "ready",
    badge: "Tiện Lợi",
    imageSrc: "/images/products/yen-chung-san.webp",
    imageAlt: "Yến Chưng Sẵn",
    price: "Liên hệ giá",
    details: [
      { icon: "⏱️", title: "Tiện lợi", description: "Mở nắp dùng ngay, không cần chế biến" },
      { icon: "✨", title: "Thành phần", description: "Yến sào nguyên chất, đường phèn, nước tinh khiết" },
      { icon: "🛡️", title: "Bảo quản", description: "Đóng hũ thủy tinh cao cấp, bảo quản lạnh" }
    ]
  },
  {
    id: "prod-6",
    name: "Set Quà Gia Đình",
    description: "Bộ combo yến sào đa dạng dành cho gia đình, gồm nhiều loại yến phù hợp mọi lứa tuổi và nhu cầu sử dụng.",
    category: "gift",
    badge: "Gia Đình",
    imageSrc: "/images/products/set-qua-gia-dinh.webp",
    imageAlt: "Set Quà Gia Đình",
    price: "Liên hệ giá",
    details: [
      { icon: "👨‍👩‍👧‍👦", title: "Đối tượng", description: "Phù hợp mọi thành viên trong gia đình" },
      { icon: "🎁", title: "Thành phần", description: "Combo yến thô, yến sợi và yến chưng sẵn" },
      { icon: "💫", title: "Ý nghĩa", description: "Món quà sức khỏe trọn vẹn cho người thân yêu" }
    ]
  }
];

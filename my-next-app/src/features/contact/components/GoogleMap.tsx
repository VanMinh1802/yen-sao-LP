export function GoogleMap() {
  return (
    <div className="w-full h-full min-h-[640px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.870827032064!2d109.18695407479568!3d12.265516988034063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31706814dcac9f09%3A0x18f8e70ee8c7ac7d!2zWeG6v24gc8OgbyBOZ-G7jWMgVGjhuqNvIEtow6FuaCBIw7Jh!5e0!3m2!1svi!2s!4v1713200000000!5m2!1svi!2s"
        width="100%"
        height="100%"
        style={{ border: 0, filter: "contrast(1.05) brightness(0.95)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Vị trí Yến Sào Ngọc Thảo trên bản đồ"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

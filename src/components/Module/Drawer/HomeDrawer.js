"use client";
import Drawer from "./Index";

function HomeDrawer({ content, open, onClose }) {
  return (
    <Drawer
      title="فروشگاه آنلاین قهوه"
      open={open}
      onClose={onClose}
      size="w-[80%]"
    >
      {content}
    </Drawer>
  );
}

export default HomeDrawer;
import { useEffect } from "react";

const Drawer = ({
  title,
  open,
  onClose,
  children,
  size,
  position = "left",
}) => {
  const positionClass =
    position === "right"
      ? "right-0 translate-x-full"
      : "left-0 -translate-x-full";
  const openClass = open ? "translate-x-0" : positionClass;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div>
      {open && (
        <div
          className="fixed inset-0 z-30 transition-opacity duration-300 bg-overlay"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 ${
          position === "right" ? "right-0" : "left-0"
        } h-screen p-4 transition-transform duration-300 ${size} ${openClass} bg-white z-40 overflow-y-auto`}
        style={{ WebkitOverflowScrolling: "touch" }}
        tabIndex="-1"
        aria-labelledby="drawer-label"
      >
        <div className="flex items-center mb-10 pl-10">
          <button
            type="button"
            onClick={onClose}
            className="text-gray-800 w-8 h-8 flex items-center justify-center"
            aria-label="بستن"
          >
            <svg
              className="size-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
          <h3
            id="drawer-label"
            className="text-zinc-700 text-3xl tracking-tight font-bold leading-[38.4px]"
          >
            {title}
          </h3>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Drawer;

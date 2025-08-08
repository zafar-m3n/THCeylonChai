import React from "react";
import Badge from "@/components/ui/Badge";
import Rate from "@/components/ui/Rate";
import Icon from "@/components/ui/Icon";

/**
 * TeaCard – image-true (no transforms), premium, UI-only.
 * - Photo stays pristine (no scale/rotate).
 * - Info lives in a clean card below the image.
 * - Minimal action links (not buttons).
 * - Subtle micro-interactions: shadow/ring/underline only.
 */
const ActionLink = ({ children, icon, emphasis = "primary" }) => {
  const color = emphasis === "primary" ? "text-accent" : "text-gray-700 hover:text-gray-900";

  return (
    <button type="button" className={`group inline-flex items-center gap-1.5 ${color} font-medium relative`}>
      <span
        className="
          relative after:absolute after:left-0 after:-bottom-0.5
          after:h-[2px] after:w-full after:scale-x-0
          after:bg-current after:transition-transform
          after:origin-left group-hover:after:scale-x-100
        "
      >
        {children}
      </span>
      {icon && (
        <Icon icon={icon} width={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </button>
  );
};

const TeaCard = ({
  name,
  weight,
  price,
  img,
  oldPrice,
  badge,
  badgeVariant = "primary",
  rating = 4.5,
  reviews = 120,
}) => {
  return (
    <figure
      className="
        group relative rounded-3xl overflow-hidden bg-white
        ring-1 ring-black/5 hover:ring-accent/30
        shadow-sm hover:shadow-md transition-all duration-300
      "
    >
      {/* IMAGE (true aspect, zero distortion/animation) */}
      <div className="p-3">
        <div className="relative rounded-2xl overflow-hidden ring-1 ring-black/5 bg-gray-50">
          {/* Badge & weight (small, non-obstructive) */}
          {badge && (
            <div className="absolute top-3 left-3 z-10">
              <Badge variant={badgeVariant} icon="mdi:fire" className="shadow-sm">
                {badge}
              </Badge>
            </div>
          )}
          <span
            className="
              absolute top-3 right-3 rounded-full
              bg-white/90 backdrop-blur px-2.5 py-0.5 text-[11px] font-medium
              text-gray-700 shadow-sm
            "
          >
            {weight}
          </span>

          <img src={img} alt={name} loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover" />
        </div>
      </div>

      {/* INFO CARD (separate from image, so photos stay clean) */}
      <figcaption className="px-4 pb-4">
        {/* Title */}
        <h3 className="font-semibold text-[1.06rem] leading-snug text-gray-900 line-clamp-2">{name}</h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <Rate value={rating} allowHalf size={16} interactive={false} />
          <span className="text-xs text-gray-500">({reviews})</span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-green-700 font-semibold text-lg">{price}</span>
          {oldPrice && <span className="text-xs text-gray-400 line-through">{oldPrice}</span>}
        </div>

        {/* Actions – lightweight segmented row */}
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-gray-100 pt-3">
          <ActionLink emphasis="primary" icon="mdi:whatsapp">
            Order
          </ActionLink>
          <span className="h-4 w-px bg-gray-200" aria-hidden="true" />
          <ActionLink emphasis="secondary" icon="mdi:arrow-right">
            Details
          </ActionLink>
        </div>
      </figcaption>
    </figure>
  );
};

export default TeaCard;

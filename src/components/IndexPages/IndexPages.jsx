import Link from "next/link";
import { NavItems } from "../../Layout/Navbar/Menu/NavItems";
import PopOverButton from "../../Layout/Navbar/Menu/PopOverButton/PopOverButton";
import Title from "../Title/Title";

export default function IndexPage({ name = "" }) {
  return (
    <div>
      <Title isH1>{name}</Title>
      <div className="grid grid-cols-12 gap-2 max-w-5xl mx-auto px-4">
        {NavItems[name].map((value, index) => {
          return (
            <Link href={value.href} legacyBehavior  key={name + index}>
              <div

                className={`text-blue-500 ${
                  value.subtitle
                    ? "col-span-12"
                    : "col-span-12 md:col-span-6 lg:col-span-4"
                }`}
              >
                <PopOverButton
                  bgColor={value.bgColor}
                  Ricon={value.LeftIcon}
                  title={value.title}
                  subtitle={value.subtitle}
                  iconColor={value.iconColor}
                  isCurrentPath={false}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

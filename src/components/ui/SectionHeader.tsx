import { FC } from "react";

interface SectionHeaderProps {
  preTitle: string;
  title: string;
  context: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ preTitle, title, context }) => {
  return (
    <div>
      <h2 className="text-teal-700 text-sm uppercase font-bold font-sans">{preTitle}</h2>
      <p className="text-slate-800 text-4xl">{title}</p>
      <p className="font-sans my-8 text-lg text-slate-700">{context}</p>
    </div>
  )
}

export default SectionHeader;
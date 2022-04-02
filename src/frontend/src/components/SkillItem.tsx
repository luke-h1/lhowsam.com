import type { IconType } from 'react-icons';

interface Props {
  icon: IconType;
  text: string;
}

const SkillItem = ({ icon, text }: Props) => {
  return (
    <li>
      <span>{icon({ className: 'skill-icon' })}</span>
      <small>{text}</small>
    </li>
  );
}
export default SkillItem;

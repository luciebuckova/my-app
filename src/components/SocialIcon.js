export default function SocialIcon({ children, link }) {
  return (
    <li className="duration-300 hover:scale-110 hover:text-teal-400">
      <a href={link}>{children}</a>
    </li>
  );
}

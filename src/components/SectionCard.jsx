
const SectionCard = ({ title, content, icon, color, hoverColor }) => {
  return (
    <div className={`${color} transition hover:${hoverColor} w-auto p-5 rounded-xl h-60 md:h-72`}>
        <div className="text-4xl">{icon}</div>
        <div>
            <p className="font-bold text-indigo-900">{title}</p>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default SectionCard
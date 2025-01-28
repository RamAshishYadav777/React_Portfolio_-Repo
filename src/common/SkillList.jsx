

function SkillList({src,skill}) {
  return (
    <span>
      <img src={src} alt="Checker icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList

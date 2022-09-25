import './styles/Flag8Star.css'

function Flag8Star ({className, nameTeam, flagTeam}) {
  const idTeam = `flag-home-${nameTeam.replace(' ', '-')}`;
  const componentClass = className? `svg-border-flag ${className}`: `svg-border-flag`;

  return (
    <svg className={componentClass} xmlns="http://www.w3.org/2000/svg" height="120px" version="1.1" viewBox="0 0 752 752">
      <defs>
        <pattern
          id={idTeam}
          x="200" y="200"
          patternUnits="userSpaceOnUse"
          width="600" height="600" >
          <image
            href={require(`${flagTeam}`)}
            className="innerFlag"
            x={-194} y={45}
            width={578} height={370} />
        </pattern>
      </defs>
      <path
        d="m506.71 376 41.199 71.039-79.559 21.312-21.312 79.559-71.039-41.199-71.035 41.199-21.312-79.559-79.562-21.312 41.203-71.039-41.203-71.035 79.562-21.312 21.312-79.562 71.035 41.203 71.039-41.203 21.312 79.562 79.559 21.312z"
        fill={`url(#${idTeam})`}/>
    </svg>
  )
}

export default Flag8Star;
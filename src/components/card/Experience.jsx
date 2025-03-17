import CardCss from "./../card/Card.module.css"

export default function Experience({ experienceName,exFromDate,exToDate,company,skillsList}) {
    return (
        <div className={CardCss.Experience_Card}>
            <h3>{experienceName+ " "} , {" "+company}</h3>
            <p>{exFromDate + " "},{" "+exToDate}</p>
            <ul>
                {skillsList.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}
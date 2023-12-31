import "./groupmembers.css"

const GroupMembers = () => {
    const groupMembers = [
        "Ashenafi Pawlos",
        "Atnasiya Abebe",
        "Ayub Sufian",
        "Beamlak Kagnew",
        "Beamlak Solomon",
        "Bezawit Abate",
        "Betelhem Wondale",
        "Betrearon Dereje",
        "Abiy Haregot",
        "Hanan Yesuf"
        
      ];
    return (
      <>
      <div className="group9Members">
      <h1 className="text-xl font-bold mb-4">Group 9 Members</h1>
      <ul>
        {groupMembers.map((member, index) => (
          <li key={index} className="mb-2 text-blue-500">
            {member}
          </li>
        ))}
      </ul>
      </div>
      </>
    )
}

export default GroupMembers
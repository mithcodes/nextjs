import Link from "next/link";

function aboutUs() {
  const details: { id: string; name: string; role: string }[] = [
    { id: "1", name: "Yash", role: "Senior Developer" },
    { id: "2", name: "Vaibhav", role: "Backend Developer" },
    { id: "3", name: "Suresh", role: "Frontend Developer" },
  ];
  return (
    <div className="text-center mt-8 text-2xl">
      Hello Developers, <br />
      <br />
      {details.map((e) => {
        return (
          <div>
            <Link href={`/about/${e.id}`}>{e.name}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default aboutUs;

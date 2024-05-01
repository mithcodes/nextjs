function DeveloperName({ params }: { params: { developer_id: string } }) {
  const id: string = params.developer_id;
  console.log(params);
  console.log("hello");

  const details: { id: string; name: string; role: string }[] = [
    { id: "1", name: "Yash", role: "Senior Developer" },
    { id: "2", name: "Vaibhav", role: "Backend Developer" },
    { id: "3", name: "Suresh", role: "Frontend Developer" },
  ];

  const developer = details.find((dev) => dev.id === id);

  return (
    <div className="text-center mt-8 text-2xl">
      {developer
        ? `${developer.name}, ${developer.role}`
        : `Developer doesn't exist`}
    </div>
  );
}

export default DeveloperName;

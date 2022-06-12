export default function Question({ children: questionItem }) {
  const { _id, name, email, observation, date } = questionItem;

  return (
    <div className="flex flex-row items-center justify-start space-x-4 mb-3 ">
      <span className="font-mono">{_id}</span>
      <span className={`flex-grow font-semibold text-sm`}>{name}</span>
      <span className={`font-semibold text-sm`}>{email}</span>
      <span className={`font-semibold text-sm`}>{observation}</span>
      <span className={`font-semibold text-sm`}>{date}</span>
    </div>
  );
}

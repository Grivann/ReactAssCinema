import Button from './Button';

export default function BtnBox() {
  return (
    <div className="flex p-4 w-full justify-center">
      <Button text="PlayStore" colorClass="orange-600" />
      <Button text="App Store" colorClass="blue-500" />
    </div>
  );
}

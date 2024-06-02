import Button from './Button';

export default function BtnBox() {
  return (
    <div className="flex p-4 w-full justify-center">
      <Button text="PlayStore"  />
      <Button text="App Store" />
    </div>
  );
}

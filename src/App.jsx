import "./App.css";
import omelette from "./assets/image-omelette.jpeg";

function App() {
  return (
    <>
      <div className="bg-Eggshell flex items-center">
        <div className="w-full md:w-[50%] mx-auto my-20 bg-white h-fit p-0 md:p-6 rounded-none md:rounded-[20px]">
          <img src={omelette} alt="omelette" className="rounded-none md:rounded-[10px]" />
          <div className="p-4">
            <h1 className="font-young text-3xl font-bold md:mt-5">Simple Omelette Recipe</h1>
            <p className="font-outfit font-normal text-wenge-brown py-3">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
            <div className=" p-4 rounded-lg bg-rose-white">
              <p className="text-base text-dark-raspberry font-semibold">Preparation time</p>
              <ul className="flex flex-col gap-y-2 py-2">
                <li className="list-disc ml-6 text-sm">Total: <span className="text-wenge-brown">Approximately 10 minutes</span></li>
                <li className="list-disc ml-6 text-sm">Preparation: <span className="text-wenge-brown">5 minutes</span></li>
                <li className="list-disc ml-6 text-sm">Cooking: <span className="text-wenge-brown">5 minutes</span></li>
              </ul>
            </div>
            {/* section */}
            <div className="my-4 pb-4 borderBottom">
              <h3 className="text-nutmeg text-2xl font-young py-2">Ingredients</h3>
              <ul className="flex flex-col gap-y-2">
                <li className="list-disc list-nutmeg ml-6 text-wenge-brown">2-3 large eggs</li>
                <li className="list-disc list-nutmeg ml-6 text-wenge-brown">Salt, to taste</li>
                <li className="list-disc list-nutmeg ml-6 text-wenge-brown">Pepper, to taste</li>
                <li className="list-disc list-nutmeg ml-6 text-wenge-brown">1 tablespoon of butter or oil</li>
                <li className="list-disc list-nutmeg ml-6 text-wenge-brown">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
              </ul>
            </div>
            {/* section */}
            <div className="my-4 pb-4 borderBottom">
              <h3 className="text-nutmeg text-2xl font-young py-2">Instructions</h3>
              <ul className="flex flex-col gap-y-2">
                <li className="list-decimal ml-6 text-sm font-semibold">Beat the eggs: <span className="text-wenge-brown font-normal">In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</span></li>
                <li className="list-decimal ml-6 text-sm font-semibold">Heat the pan: <span className="text-wenge-brown font-normal">Place a non-stick frying pan over medium heat and add butter or oil.</span></li>
                <li className="list-decimal ml-6 text-sm font-semibold">Cook the omelette: <span className="text-wenge-brown font-normal">Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span></li>
                <li className="list-decimal ml-6 text-sm font-semibold"> Add fillings (optional):
                  <span className="text-wenge-brown font-normal">When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span> </li>
                <li className="list-decimal ml-6 text-sm font-semibold">Fold and serve: <span className="text-wenge-brown font-normal">As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span></li>
                <li className="list-decimal ml-6 text-sm font-semibold">Enjoy: <span className="text-wenge-brown font-normal">Serve hot, with additional salt and pepper if needed.</span></li>
              </ul>
            </div>
            {/* section */}
            <div className="flex flex-col">
              <h3 className="text-nutmeg text-2xl font-young py-2">Nutrition</h3>
              <span className="text-sm text-wenge-brown">The table below shows nutritional values per serving without the additional fillings.</span>

              <table className="table-auto w-full mt-2">
                <tbody className="w-full divide-y divide-light-grey grid">
                  <tr className="w-full flex py-1">
                    <td className="text-sm text-wenge-brown pl-7 w-1/2">Calories</td>
                    <td className="text-sm text-nutmeg w-1/2">277kcal</td>
                  </tr>
                  <tr className="flex w-full py-1">
                    <td className="text-sm text-wenge-brown pl-7 w-1/2">Carbs</td>
                    <td className="text-sm text-nutmeg w-1/2">0g</td>
                  </tr>
                  <tr className="w-full py-1 flex items-center">
                    <td className="text-sm text-wenge-brown pl-7 w-1/2">Protein</td>
                    <td className="text-sm text-nutmeg w-1/2">20g</td>
                  </tr>
                  <tr className="flex w-full py-1">
                    <td className="text-sm text-wenge-brown pl-7 w-1/2">Fat</td>
                    <td className="text-sm text-nutmeg w-1/2">22g</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* section */}
      <div className="attribution text-[11px] text-center">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-blueC">Frontend Mentor </a>Coded by
        <a href="https://devemma.netlify.app/" target="_blank" className="text-blueC">Emmanuel Tofunmi</a>
      </div>
    </>
  );
}

export default App;

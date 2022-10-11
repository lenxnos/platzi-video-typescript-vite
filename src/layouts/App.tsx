import { Carousel } from "@/components/Carousel";
import { CarouselItem } from "@/components/CarouselItem";
import { Categories } from "@/components/Categories";
import { Header, Search, Footer } from "@/components/ui";
import { useInitialState } from "@/hooks";
import '@/assets/styles/App.scss';

const API = 'http://localhost:3000/initalState'

function Main() {
  const initialState = useInitialState(API);
  return (
    <div className="App">
      <Header />
      <Search />
      {initialState.mylist.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
            {initialState.mylist.map(item =>
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {initialState.originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
}

export default Main;
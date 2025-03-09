import { createSignal, onMount } from "solid-js";
import { Events, Window } from "@wailsio/runtime";

function App() {
    onMount(() => {
        Events.On(Events.Types.Common.WindowFullscreen, () => {
            alert("WINDOW IS NOW FULL SCREEN");
        });

        Events.On(Events.Types.Common.WindowUnFullscreen, () => {
            alert("WINDOW IS NOW UNFULL SCREEN");
        });
    });

    return (
        <div class="container">
            <button
                style={{ width: "150px" }}
                onClick={() => {
                    Window.ToggleFullscreen();
                }}
            >
                Toggle FullScreen
            </button>
        </div>
    );
}

export default App;

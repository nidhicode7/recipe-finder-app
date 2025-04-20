import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const searchRecipes = async () => {
    try {
      const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch", {
        params: {
          query: query,
          apiKey: "a842babafda342f394941f854b5f98a6",
        },
      });
      setRecipes(response.data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const fetchRecipeDetails = async (id) => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
        params: {
          apiKey: "a842babafda342f394941f854b5f98a6",
        },
      });
      setSelectedRecipe(response.data); // store full recipe data
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e6e6fa",
        flexDirection: "column",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>🍳 Recipe Finder</h1>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Enter ingredients (e.g., egg, tomato)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "10px", width: "280px", fontSize: "16px" }}
        />

        <button
          onClick={searchRecipes}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Search
        </button>
      </div>

      <div style={{ marginTop: "40px", maxWidth: "600px", textAlign: "center" }}>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: "30px" }}>
            <h3>{recipe.title}</h3>
            <img
              src={recipe.image}
              alt={recipe.title}
              width="250"
              style={{ borderRadius: "10px", cursor: "pointer" }}
              onClick={() => fetchRecipeDetails(recipe.id)} // Click to see full details
            />
          </div>
        ))}
      </div>

      {/* Modal for full recipe details */}
      {selectedRecipe && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setSelectedRecipe(null)} // Close modal on outside click
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "600px",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <h2>{selectedRecipe.title}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.title} width="100%" />
            <p>
              <strong>Ready in:</strong> {selectedRecipe.readyInMinutes} minutes
            </p>
            <p>
              <strong>Servings:</strong> {selectedRecipe.servings}
            </p>
            <div dangerouslySetInnerHTML={{ __html: selectedRecipe.summary }}></div>
            <div
              dangerouslySetInnerHTML={{
                __html: selectedRecipe.instructions || "<p>No instructions available.</p>",
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

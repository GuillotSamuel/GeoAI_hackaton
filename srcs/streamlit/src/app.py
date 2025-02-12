import glob
import json
import os
from pathlib import Path

import streamlit as st

from viz import create_map_with_geotiff_tiles


def generate_map(
    directory: str, year: int, month: int, country_tiles: list[str]
) -> None:
    """Generate the plotly map.

    Arguments:
        directory (str): Directory containing GeoTiff files.
        year (int): Selected year.
        month (int): Selected month formatted as an integer in the range 1-12.
        country_tiles (list[str]): List of MGRS tiles for the selected country.

    Returns:
        None.
    """
    try:
        if not directory or not Path(directory).is_dir():
            raise ValueError("Invalid directory path.")
        
        # print(f"Directory: {directory}")

        prediction_tiles = glob.glob(os.path.join(directory, f"{year}/{month}/*.tif"))
        # print(os.path.join(directory, f"{year}/{month}/*.tif"))
        # print(f"Found tiles: {prediction_tiles}")

        tiles_to_consider = [
            tile
            for tile in prediction_tiles
            if os.path.basename(tile).split("_")[1].strip("T") in country_tiles
        ]
        print(f"Tiles to consider: {tiles_to_consider}")

        if not tiles_to_consider:
            raise FileNotFoundError(
                "No GeoTIFF files found for the given year, month, and country."
            )

        fig = create_map_with_geotiff_tiles(tiles_to_consider)
        st.plotly_chart(fig, use_container_width=True)
    except (ValueError, FileNotFoundError, Exception) as e:
        st.error(f"An error occurred: {str(e)}")


def main() -> None:
    """Instageo Serve Main Entry Point."""
    st.set_page_config(layout="wide")
    st.title("InstaGeo Serve")

    st.sidebar.subheader(
        "This application enables the visualisation of GeoTIFF files on an interactive map.",
    )
    st.sidebar.header("Settings")
    with open(
        "utils/country_code_to_mgrs_tiles.json"
    ) as json_file:
        countries_to_tiles_map = json.load(json_file)

    with st.sidebar.container():
        # directory = st.sidebar.text_input(
        #     "GeoTiff Directory:",
        #     help="Write the path to the directory containing your GeoTIFF files",
        # )
        current_file_path = os.path.abspath(__file__)
        current_dir = os.path.dirname(current_file_path)
        directory = os.path.join(current_dir, 'predictions')
        # directory ="predictions"
        country_code = st.sidebar.selectbox(
            "ISO 3166-1 Alpha-2 Country Code:",
            options=list(countries_to_tiles_map.keys()),
        )
        year = st.sidebar.number_input("Select Year", 2021, 2024)
        month = st.sidebar.number_input("Select Month", 1, 12)

    if st.sidebar.button("Generate Map"):
        print(f"{directory}, {year}, {month}, {country_code}")
        country_tiles = countries_to_tiles_map[country_code]
        generate_map(directory, year, month, country_tiles)
    else:
        st.plotly_chart(
            create_map_with_geotiff_tiles(tiles_to_overlay=[]), use_container_width=True
        )


if __name__ == "__main__":
    main()
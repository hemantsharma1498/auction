#!/bin/bash

# Define the source and destination directories
SOURCE_DIR="./" # Current directory (legacy components folder)

DEST_DIR="/Users/hemantsharma/auction/client/src/components/" # Target directory for Next.js components

# Function to copy and modify file extensions and imports
process_files() {
    # Check if the source directory contains any files
    if [ ! "$(ls -A "$SOURCE_DIR")" ]; then
        echo "Source directory is empty or does not exist."
        exit 1
    fi

    for file in "$SOURCE_DIR"/*; do
        # Check if the file is a regular file
        if [[ ! -f "$file" ]]; then
            continue
        fi

        # Get the file extension and base filename
        extension="${file##*.}"
        base_filename="$(basename "$file" .$extension)"

        # Determine the new file extension
        if [[ "$extension" == "js" ]]; then
            new_extension="ts"
        elif [[ "$extension" == "jsx" ]]; then
            new_extension="tsx"
        else
            echo "Skipping unsupported file type: $file"
            continue # Skip non-js/jsx files
        fi

        # Define the new file path in the Next.js project
        new_file_path="$DEST_DIR/$base_filename.$new_extension"

        # Copy the file and change the extension
        echo "Copying $file to $new_file_path"
        cp "$file" "$new_file_path"

        # Replace .js/.jsx imports with .ts/.tsx in the new file
        # Modify sed command to use backup option for in-place edit for cross-platform compatibility
        echo "Updating imports in $new_file_path"
        sed -i.bak 's/\.jsx\?/\.tsx/g' "$new_file_path"
        sed -i.bak 's/\.js\?/\.ts/g' "$new_file_path"

        # Optionally add TypeScript placeholders at the top of the new file
        if [[ "$new_extension" == "ts" || "$new_extension" == "tsx" ]]; then
            echo "// @ts-nocheck" | cat - "$new_file_path" >temp && mv temp "$new_file_path"
        fi

        # Remove the backup files created by sed
        rm "$new_file_path.bak"

        echo "Processed: $file -> $new_file_path"
    done
}

# Run the function to process the files
process_files

echo "All files have been processed and copied to the Next.js components folder."

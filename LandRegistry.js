import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";

export default function LandRegistry() {
  const [name, setName] = useState(""); // Add name state
  const [landTitle, setLandTitle] = useState("");
  const [videoProof, setVideoProof] = useState(null);
  const [description, setDescription] = useState("");

  const handleFileUpload = (event) => {
    setVideoProof(event.target.files[0]);
  };

  const handleSubmit = () => {
    console.log("Submitting Land for Registration:", { name, landTitle, videoProof, description });
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <Card className="p-4 shadow-lg rounded-2xl">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Register Land for Sale</h2>
          
          {/* New Name Input Field */}
          <Input 
            placeholder="Your Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="mb-3"
          />

          <Input 
            placeholder="Land Title" 
            value={landTitle} 
            onChange={(e) => setLandTitle(e.target.value)} 
            className="mb-3"
          />

          <Textarea 
            placeholder="Land Description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="mb-3"
          />

          <label className="block mb-3">
            <span className="flex items-center gap-2 cursor-pointer bg-gray-200 p-2 rounded-md">
              <Upload size={16} /> Upload Video Proof
            </span>
            <input type="file" accept="video/*" onChange={handleFileUpload} className="hidden" />
          </label>

          {videoProof && <p className="text-sm text-gray-600">{videoProof.name}</p>}

          <Button onClick={handleSubmit} className="mt-4 w-full">Submit</Button>
        </CardContent>
      </Card>
    </div>
  );
}

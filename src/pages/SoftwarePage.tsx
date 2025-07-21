import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// VFX Software data
const vfxSoftware = [
  {
    name: "After Effects",
    category: "Compositing",
    description: "Industry-standard motion graphics and visual effects software",
    proficiency: "Expert",
    image: "/Contents/software/after-effect.png",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    name: "Cinema 4D",
    category: "Visual Effects",
    description: "Powerful 4D modeling, animation, and rendering software widely used for motion graphics and VFX",
    proficiency: "Advanced",
    image: "/Contents/software/4d.png",
    gradient: "from-orange-500 to-red-600"
  },
  {
    name: "Blender",
    category: "3D Creation Suite",
    description: "Open-source 3D creation suite for modeling, animation, and VFX",
    proficiency: "Advanced",
    image: "/Contents/software/blender.png",
    gradient: "from-indigo-500 to-blue-600"
  },
  {
    name: "Houdini",
    category: "Procedural VFX",
    description: "Node-based procedural 3D animation and VFX software",
    proficiency: "Intermediate",
    image: "/Contents/software/houdini.png",
    gradient: "from-yellow-500 to-orange-600"
  },
  {
    name: "Nuke",
    category: "Compositing",
    description: "Professional node-based compositing software",
    proficiency: "Advanced",
    image: "/Contents/software/nuke.png",
    gradient: "from-green-500 to-teal-600"
  },
  {
    name: "Maya",
    category: "3D Animation",
    description: "A 3D computer graphics software widely used in the film, television, video game, and other industries for creating animations, visual effects, and 3D models",
    proficiency: "Intermediate",
    image: "/Contents/software/maya.png",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    name: "Premiere Pro",
    category: "Video Editing",
    description: "Professional video editing software for film and TV",
    proficiency: "Expert",
    image: "/Contents/software/premiere-pro.png",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    name: "Silhouette",
    category: "Visual Effects",
    description: "A software application used in visual effects (VFX) for rotoscoping, painting, and compositing",
    proficiency: "Advanced",
    image: "/Contents/software/silhouette.png",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    name: "Mocha Pro",
    category: "Visual Effects",
    description: "Industry-leading planar tracking and visual effects tool for advanced motion tracking and object removal",
    proficiency: "Advanced",
    image: "/Contents/software/mocha-pro.png",
    gradient: "from-teal-500 to-blue-700"
  }
];

const getProficiencyColor = (proficiency: string) => {
  switch (proficiency) {
    case "Expert":
      return "bg-green-500/20 text-green-400 border-green-400/30";
    case "Advanced":
      return "bg-blue-500/20 text-blue-400 border-blue-400/30";
    case "Intermediate":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-400/30";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-400/30";
  }
};

const SoftwarePage = () => {
  return (
    <div className="min-h-screen text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600 via-emerald-950 to-gray-950" />
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
            My Software Arsenal
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mastering the tools that bring imagination to life through cutting-edge visual effects and motion graphics
          </p>
        </div>
      </section>

      {/* Software Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {vfxSoftware.map((software, index) => (
              <Card
                key={software.name}
                className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Image with Gradient */}
                  <div className={`relative h-32 bg-gradient-to-br ${software.gradient} flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <img
                      src={software.image}
                      alt={software.name}
                      className="relative z-10 w-20 h-20 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {software.name}
                      </h3>
                      <Badge
                        variant="outline"
                        className={`${getProficiencyColor(software.proficiency)} border`}
                      >
                        {software.proficiency}
                      </Badge>
                    </div>

                    <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                      {software.category}
                    </Badge>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {software.description}
                    </p>

                    {/* Animated Proficiency Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Proficiency</span>
                        <span>{software.proficiency}</span>
                      </div>
                      <div className="w-full bg-secondary/20 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${software.gradient} rounded-full transform transition-all duration-1000 delay-${index * 100} group-hover:animate-pulse`}
                          style={{
                            width:
                              software.proficiency === "Expert"
                                ? "95%"
                                : software.proficiency === "Advanced"
                                ? "80%"
                                : "65%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Workflow Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seamlessly integrating multiple software solutions to deliver professional-grade visual effects, 
            from initial concept to final delivery.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { category: "Compositing", count: "6" },
              { category: "3D Software", count: "3" },
              { category: "Editing", count: "2" },
              { category: "Specialized", count: "2" }
            ].map((stat) => (
              <div key={stat.category} className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">{stat.count}</div>
                <div className="text-sm text-muted-foreground">{stat.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwarePage;

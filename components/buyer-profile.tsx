import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Building2, Linkedin, Twitter, Facebook, LayoutGrid } from "lucide-react"

export default function BuyerProfile() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/4 p-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image src="/images/saurav-profile.png" alt="Profile picture" fill className="object-cover" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Saurav Pahadia</h2>
            <p className="text-sm text-gray-500">saurav@augment.ai</p>
          </div>
        </div>

        <div className="md:w-3/4 border-t md:border-t-0 md:border-l border-gray-200">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 relative">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Augment Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium">Augment</h3>
                <div className="flex gap-2 text-gray-500">
                  <Building2 className="h-4 w-4" />
                  <Linkedin className="h-4 w-4" />
                  <Twitter className="h-4 w-4" />
                  <Facebook className="h-4 w-4" />
                  <LayoutGrid className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Description:</p>
                <p className="font-medium">VP of Product at Augment</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Level:</p>
                <p className="font-medium">Executive</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Experience:</p>
                <p className="font-medium">5 years</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Role:</p>
                <p className="font-medium">Product Leadership</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Skills:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-100">
                    Product Strategy
                  </Badge>
                  <Badge variant="outline" className="bg-teal-50 text-teal-700 hover:bg-teal-100">
                    UX Design
                  </Badge>
                  <Badge variant="outline" className="bg-pink-50 text-pink-700 hover:bg-pink-100">
                    AI/ML
                  </Badge>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Traits:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">
                    Innovative
                  </Badge>
                  <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-100">
                    User-Focused
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    Data-Driven
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


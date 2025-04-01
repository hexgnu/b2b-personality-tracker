import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Calendar, MessageSquareQuote, LightbulbIcon, Activity } from "lucide-react"
import BuyerProfile from "@/components/buyer-profile"
import PersonalityAssessment from "@/components/personality-assessment"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BuyerProfile />

        <Tabs defaultValue="personality" className="mt-8">
          <TabsList className="grid w-full grid-cols-5 max-w-3xl">
            <TabsTrigger value="personality" className="flex items-center gap-2">
              <LightbulbIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Personality</span>
            </TabsTrigger>
            <TabsTrigger value="meetings" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Meetings</span>
            </TabsTrigger>
            <TabsTrigger value="key-statements" className="flex items-center gap-2">
              <MessageSquareQuote className="h-4 w-4" />
              <span className="hidden sm:inline">Key Statements</span>
            </TabsTrigger>
            <TabsTrigger value="recommendations" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Recommendations</span>
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              <span className="hidden sm:inline">Activity</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personality" className="mt-6">
            <PersonalityAssessment />
          </TabsContent>

          <TabsContent value="meetings">
            <div className="h-64 flex items-center justify-center text-gray-500">Meeting history would appear here</div>
          </TabsContent>

          <TabsContent value="key-statements">
            <div className="h-64 flex items-center justify-center text-gray-500">Key statements would appear here</div>
          </TabsContent>

          <TabsContent value="recommendations">
            <div className="h-64 flex items-center justify-center text-gray-500">Recommendations would appear here</div>
          </TabsContent>

          <TabsContent value="activity">
            <div className="h-64 flex items-center justify-center text-gray-500">
              Activity history would appear here
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}


"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  MessageCircle,
  LightbulbIcon,
  Users,
  ShieldAlert,
  BrainCircuit,
  Sparkles,
  ClipboardCheck,
  Zap,
  HeartHandshake,
  Mountain,
  Clock,
} from "lucide-react"
import EnterpriseRadarChart from "@/components/enterprise-radar-chart"

export default function PersonalityAssessment() {
  const [selectedTab, setSelectedTab] = useState("communication")

  // Actual data from the provided JSON
  const buyerData = {
    CommunicationStyle:
      "The buyer appreciates clarity and a structured flow of information, allowing them to digest key points quickly while appreciating relevant details that can influence their decisions.",
    DecisionMakingApproach:
      "The buyer tends to be data-driven, often relying on solid evidence and analysis to inform their choices, while balancing their options and seeking a consensus among stakeholders.",
    RelationshipWithVendors:
      "The buyer tends to favor long-term partnerships, as they believe that building trust and understanding between both parties leads to better results over time.",
    RiskTolerance:
      "The buyer exhibits a moderate level of risk tolerance; while they may prefer proven solutions, they are also open to new innovations provided they are well-supported by data and a clear strategy.",
    StrategicThinking:
      "The buyer takes a longer-term view, typically aligning their purchases with broader business goals, and is interested in understanding how solutions fit into their overall strategy.",
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
          <Clock className="h-4 w-4" />
          <span>This assessment was trained using 60 minutes of talk time from MeetingFlow</span>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid grid-cols-5 mb-6">
            <TabsTrigger value="communication" className="flex flex-col items-center gap-1 py-3 h-auto">
              <MessageCircle className="h-5 w-5" />
              <span className="text-xs">Communication</span>
            </TabsTrigger>
            <TabsTrigger value="decision" className="flex flex-col items-center gap-1 py-3 h-auto">
              <LightbulbIcon className="h-5 w-5" />
              <span className="text-xs">Decision Making</span>
            </TabsTrigger>
            <TabsTrigger value="relationship" className="flex flex-col items-center gap-1 py-3 h-auto">
              <Users className="h-5 w-5" />
              <span className="text-xs">Vendor Relations</span>
            </TabsTrigger>
            <TabsTrigger value="risk" className="flex flex-col items-center gap-1 py-3 h-auto">
              <ShieldAlert className="h-5 w-5" />
              <span className="text-xs">Risk Tolerance</span>
            </TabsTrigger>
            <TabsTrigger value="strategic" className="flex flex-col items-center gap-1 py-3 h-auto">
              <BrainCircuit className="h-5 w-5" />
              <span className="text-xs">Strategic Thinking</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="communication">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-purple-500" />
                  Communication Style
                </CardTitle>
                <CardDescription>How this buyer communicates and interacts with vendors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-purple-50 rounded-lg mb-4">
                  <p className="text-sm text-purple-900">{buyerData.CommunicationStyle}</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg mb-6">
                  <h4 className="font-medium mb-3 text-purple-700">Seller Coaching Signals:</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2">
                      <span className="text-purple-600 font-bold">→</span>
                      <div>
                        <p className="font-medium">Structure your presentations with clear sections and headlines</p>
                        <p className="text-gray-600">
                          This buyer values organized information flow. Use clear headings, bullet points, and visual
                          cues to guide them through your content.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600 font-bold">→</span>
                      <div>
                        <p className="font-medium">Lead with executive summaries and key takeaways</p>
                        <p className="text-gray-600">
                          Start meetings and documents with the most important points first, then provide supporting
                          details for deeper exploration.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600 font-bold">→</span>
                      <div>
                        <p className="font-medium">Highlight decision-influencing details</p>
                        <p className="text-gray-600">
                          When sharing information, emphasize specific details that directly impact their
                          decision-making process or business outcomes.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Clarity</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Structure</span>
                    <span className="text-sm text-gray-500">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Detail Orientation</span>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Efficiency</span>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="decision">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LightbulbIcon className="h-5 w-5 text-amber-500" />
                  Decision Making Approach
                </CardTitle>
                <CardDescription>How this buyer evaluates options and makes purchasing decisions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-amber-50 rounded-lg mb-4">
                  <p className="text-sm text-amber-900">{buyerData.DecisionMakingApproach}</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg mb-6">
                  <h4 className="font-medium mb-3 text-amber-700">Seller Coaching Signals:</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2">
                      <span className="text-amber-600 font-bold">→</span>
                      <div>
                        <p className="font-medium">Back every claim with quantifiable evidence</p>
                        <p className="text-gray-600">
                          This buyer needs data to make decisions. Provide case studies, ROI calculations, and
                          performance metrics to support your value proposition.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-600 font-bold">→</span>
                      <div>
                        <p className="font-medium">Map the stakeholder landscape</p>
                        <p className="text-gray-600">
                          Identify and engage all decision influencers early. This buyer seeks consensus, so understand
                          each stakeholder's priorities and concerns.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-600 font-bold">→</span>
                      <div>
                        <p className="font-medium">Present balanced options with clear trade-offs</p>
                        <p className="text-gray-600">
                          Offer multiple solutions with transparent pros and cons for each, allowing them to make an
                          informed, analytical decision.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Data-Driven</span>
                    <span className="text-sm text-gray-500">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Evidence-Based</span>
                    <span className="text-sm text-gray-500">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Consensus-Seeking</span>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Balance</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="relationship">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-500" />
                  Relationship with Vendors
                </CardTitle>
                <CardDescription>How this buyer builds and maintains vendor relationships</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg mb-4">
                  <p className="text-sm text-green-900">{buyerData.RelationshipWithVendors}</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg mb-6">
                  <h4 className="font-medium mb-3 text-green-700">Seller Coaching Signals:</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <div>
                        <p className="font-medium">Emphasize your long-term partnership approach</p>
                        <p className="text-gray-600">
                          Highlight your company's commitment to ongoing relationship development, not just the initial
                          sale. Share your customer retention metrics.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <div>
                        <p className="font-medium">Demonstrate trust-building mechanisms</p>
                        <p className="text-gray-600">
                          Outline your transparent communication processes, regular business reviews, and how you've
                          built trust with similar clients over time.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <div>
                        <p className="font-medium">Show how you improve results over time</p>
                        <p className="text-gray-600">
                          Present a roadmap of how your partnership will evolve and deliver increasing value beyond the
                          initial implementation.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Long-Term Focus</span>
                    <span className="text-sm text-gray-500">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Trust Building</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Partnership Oriented</span>
                    <span className="text-sm text-gray-500">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Results Focused</span>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risk">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldAlert className="h-5 w-5 text-red-500" />
                  Risk Tolerance
                </CardTitle>
                <CardDescription>How this buyer approaches risk in business decisions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg mb-4">
                  <p className="text-sm text-red-900">{buyerData.RiskTolerance}</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg mb-6">
                  <h4 className="font-medium mb-3 text-red-700">Seller Coaching Signals:</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">→</span>
                      <div>
                        <p className="font-medium">Balance innovation with proven track record</p>
                        <p className="text-gray-600">
                          When introducing new solutions, connect them to established technologies or methodologies the
                          buyer already trusts.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">→</span>
                      <div>
                        <p className="font-medium">Provide comprehensive risk mitigation plans</p>
                        <p className="text-gray-600">
                          Include detailed contingency plans, implementation safeguards, and risk assessment matrices
                          with every proposal.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">→</span>
                      <div>
                        <p className="font-medium">Support innovations with robust data</p>
                        <p className="text-gray-600">
                          When proposing newer solutions, provide extra data points, pilot results, and third-party
                          validations to overcome cautious tendencies.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Proven Solutions</span>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Innovation Openness</span>
                    <span className="text-sm text-gray-500">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Data Requirement</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Strategic Clarity</span>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="strategic">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BrainCircuit className="h-5 w-5 text-blue-500" />
                  Strategic Thinking
                </CardTitle>
                <CardDescription>How this buyer approaches long-term planning and vision</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg mb-4">
                  <p className="text-sm text-blue-900">{buyerData.StrategicThinking}</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg mb-6">
                  <h4 className="font-medium mb-3 text-blue-700">Seller Coaching Signals:</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">→</span>
                      <div>
                        <p className="font-medium">Connect your solution to their strategic roadmap</p>
                        <p className="text-gray-600">
                          Research and understand Augment's published business goals, then explicitly show how your
                          offering advances those objectives.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">→</span>
                      <div>
                        <p className="font-medium">Present with a 3-5 year vision</p>
                        <p className="text-gray-600">
                          Extend your value proposition beyond immediate benefits to show long-term strategic advantages
                          and future capabilities.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">→</span>
                      <div>
                        <p className="font-medium">Demonstrate strategic integration capabilities</p>
                        <p className="text-gray-600">
                          Show how your solution integrates with their existing technology ecosystem and supports
                          broader business transformation goals.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Long-term View</span>
                    <span className="text-sm text-gray-500">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Business Alignment</span>
                    <span className="text-sm text-gray-500">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Strategic Fit</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Goal Orientation</span>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Enterprise Buyer Profile</CardTitle>
            <CardDescription>Assessment based on five key personality dimensions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <EnterpriseRadarChart />
            </div>

            <div className="grid grid-cols-1 gap-4 mt-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 h-8 w-8 rounded-full p-0 flex items-center justify-center">
                  <Sparkles className="h-4 w-4" />
                </Badge>
                <div>
                  <p className="font-medium">Innovativeness: 70%</p>
                  <p className="text-sm text-gray-500">Moderate openness to new approaches with data support</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 h-8 w-8 rounded-full p-0 flex items-center justify-center">
                  <ClipboardCheck className="h-4 w-4" />
                </Badge>
                <div>
                  <p className="font-medium">Professional Diligence: 90%</p>
                  <p className="text-sm text-gray-500">High attention to evidence and structured analysis</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 h-8 w-8 rounded-full p-0 flex items-center justify-center">
                  <Zap className="h-4 w-4" />
                </Badge>
                <div>
                  <p className="font-medium">Confidence in Execution: 85%</p>
                  <p className="text-sm text-gray-500">Strong belief in strategic implementation</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200 h-8 w-8 rounded-full p-0 flex items-center justify-center">
                  <HeartHandshake className="h-4 w-4" />
                </Badge>
                <div>
                  <p className="font-medium">Client Centric: 85%</p>
                  <p className="text-sm text-gray-500">Values long-term partnerships and stakeholder consensus</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 h-8 w-8 rounded-full p-0 flex items-center justify-center">
                  <Mountain className="h-4 w-4" />
                </Badge>
                <div>
                  <p className="font-medium">Resilience: 80%</p>
                  <p className="text-sm text-gray-500">Balances risk with strategic long-term planning</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


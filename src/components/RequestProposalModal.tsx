import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Send, User, Mail, Building, Globe, FileText } from "lucide-react"

interface RequestProposalModalProps {
  isOpen: boolean
  onClose: () => void
}

const RequestProposalModal = ({ isOpen, onClose }: RequestProposalModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    projectType: "",
    timeline: "",
    budget: "",
    description: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your Laravel API
    console.log("Form submitted:", formData)
    // Reset form and close modal
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      country: "",
      projectType: "",
      timeline: "",
      budget: "",
      description: ""
    })
    onClose()
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="border-0 shadow-strong">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl gradient-primary bg-clip-text text-transparent">
                      Request Research Proposal
                    </CardTitle>
                    <p className="text-muted-foreground mt-2">
                      Tell us about your research needs and we'll send you a detailed proposal within 24 hours.
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <User className="h-4 w-4 text-primary" />
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Building className="h-4 w-4 text-primary" />
                        Company *
                      </label>
                      <Input
                        required
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+234 xxx xxx xxxx"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Globe className="h-4 w-4 text-primary" />
                        Country/Market *
                      </label>
                      <Select value={formData.country} onValueChange={(value) => handleChange("country", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nigeria">Nigeria</SelectItem>
                          <SelectItem value="ghana">Ghana</SelectItem>
                          <SelectItem value="senegal">Senegal</SelectItem>
                          <SelectItem value="ivory-coast">Ivory Coast</SelectItem>
                          <SelectItem value="multi-country">Multi-country</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Research Type *
                      </label>
                      <Select value={formData.projectType} onValueChange={(value) => handleChange("projectType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select research type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="market-research">Market Research</SelectItem>
                          <SelectItem value="social-research">Social & Opinion Research</SelectItem>
                          <SelectItem value="customer-satisfaction">Customer Satisfaction</SelectItem>
                          <SelectItem value="retail-audit">Retail Audit</SelectItem>
                          <SelectItem value="product-testing">Product Testing</SelectItem>
                          <SelectItem value="mystery-shopping">Mystery Shopping</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Timeline</label>
                      <Select value={formData.timeline} onValueChange={(value) => handleChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need results?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">ASAP (1-2 weeks)</SelectItem>
                          <SelectItem value="fast">Fast (3-4 weeks)</SelectItem>
                          <SelectItem value="standard">Standard (1-2 months)</SelectItem>
                          <SelectItem value="flexible">Flexible (2+ months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Budget Range</label>
                      <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500k">Under ₦500,000</SelectItem>
                          <SelectItem value="500k-1m">₦500,000 - ₦1,000,000</SelectItem>
                          <SelectItem value="1m-3m">₦1,000,000 - ₦3,000,000</SelectItem>
                          <SelectItem value="3m-5m">₦3,000,000 - ₦5,000,000</SelectItem>
                          <SelectItem value="5m-plus">₦5,000,000+</SelectItem>
                          <SelectItem value="not-sure">Not sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      Project Description *
                    </label>
                    <Textarea
                      required
                      value={formData.description}
                      onChange={(e) => handleChange("description", e.target.value)}
                      placeholder="Please describe your research objectives, target audience, key questions you want to answer, and any specific requirements..."
                      className="min-h-[120px] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onClose}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="cta"
                      className="flex-1 group"
                    >
                      Send Proposal Request
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </form>
                
                <div className="mt-6 p-4 bg-secondary/50 rounded-xl">
                  <p className="text-sm text-muted-foreground text-center">
                    🔒 Your information is secure and will only be used to prepare your research proposal. 
                    We typically respond within 24 hours with a detailed proposal and next steps.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default RequestProposalModal
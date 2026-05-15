import os
import json
import argparse
from typing import Dict, Any

# Note: In a real environment, you'd use the google-genai SDK 
# for the Python equivalent. This is a logic prototype for a portfolio.

class LeadScorer:
    """
    A logic-based Lead Scoring tool for RevOps workflows.
    Bridges business logic (Bain/AlixPartners style) with technical automation.
    """
    
    def __init__(self, weights: Dict[str, float] = None):
        self.weights = weights or {
            "tier_1_company": 40,
            "decision_maker": 30,
            "high_growth_context": 20,
            "funding_context": 10
        }

    def score_lead(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Scores a lead based on firmographic and professional data.
        """
        score = 0
        
        # 1. Company Tier (Fortune 500, High Growth, etc.)
        company = data.get("company", "").lower()
        if any(keyword in company for keyword in ["tech", "ai", "consulting", "fintech"]):
            score += self.weights["tier_1_company"]
        elif any(keyword in company for keyword in ["startup", "series"]):
            score += self.weights["tier_1_company"] * 0.75
            
        # 2. Persona / Decision Maker
        role = data.get("role", "").lower()
        if any(keyword in role for keyword in ["ceo", "founder", "vp", "head of", "director"]):
            score += self.weights["decision_maker"]
        elif "manager" in role:
            score += self.weights["decision_maker"] * 0.5
            
        # 3. Contextual Data (e.g., funding or growth phase)
        context = data.get("context", "").lower()
        if "funding" in context or "round" in context:
            score += self.weights["funding_context"]
        if "growth" in context or "scaling" in context:
            score += self.weights["high_growth_context"]

        # Ensure ceiling
        score = min(100, score)
        
        # Categorize
        if score >= 85:
            tier = "P0 (Immediate Outreach)"
        elif score >= 60:
            tier = "P1 (High Priority)"
        else:
            tier = "P2 (Nurture)"
            
        return {
            "score": score,
            "tier": tier,
            "status": "Ready for Sync" if score > 70 else "Nurture Queue"
        }

def main():
    parser = argparse.ArgumentParser(description="RevOps AI Lead Scorer Prototype")
    parser.add_argument("--name", required=True, help="Lead Name")
    parser.add_argument("--company", required=True, help="Company Name")
    parser.add_argument("--role", required=True, help="Job Title")
    parser.add_argument("--context", help="Context (e.g. Funding, Scaling)")

    args = parser.parse_args()
    
    scorer = LeadScorer()
    lead_data = {
        "name": args.name,
        "company": args.company,
        "role": args.role,
        "context": args.context
    }
    
    result = scorer.score_lead(lead_data)
    print(f"\n--- RevOps Lead Scoring Analysis ---")
    print(f"Lead: {args.name} @ {args.company}")
    print(f"Role: {args.role}")
    print(f"------------------------------------")
    print(f"Final Score: {result['score']}/100")
    print(f"Priority:    {result['tier']}")
    print(f"Decision:    {result['status']}")
    print(f"------------------------------------\n")

if __name__ == "__main__":
    main()
